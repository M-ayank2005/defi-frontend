// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoanManager {
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interestRate;
        uint256 duration;
        uint256 startTime;
        bool isRepaid;
    }

    address public owner;
    uint256 public loanCount;
    mapping(uint256 => Loan) public loans;
    mapping(address => uint256[]) public userLoans;

    event LoanCreated(uint256 loanId, address borrower, uint256 amount, uint256 interestRate, uint256 duration);
    event LoanRepaid(uint256 loanId, address borrower, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function createLoan(uint256 interestRate, uint256 duration) external payable {
        require(msg.value > 0, "Amount must be greater than 0");
        loanCount++;
        loans[loanCount] = Loan({
            borrower: msg.sender,
            amount: msg.value,
            interestRate: interestRate,
            duration: duration,
            startTime: block.timestamp,
            isRepaid: false
        });
        userLoans[msg.sender].push(loanCount);

        emit LoanCreated(loanCount, msg.sender, msg.value, interestRate, duration);
    }

    function repayLoan(uint256 loanId) external payable {
        Loan storage loan = loans[loanId];
        require(loan.borrower == msg.sender, "Not the borrower");
        require(!loan.isRepaid, "Loan already repaid");

        uint256 interest = (loan.amount * loan.interestRate) / 100;
        uint256 totalRepayment = loan.amount + interest;
        require(msg.value == totalRepayment, "Incorrect repayment amount");

        loan.isRepaid = true;
        payable(owner).transfer(totalRepayment);

        emit LoanRepaid(loanId, loan.borrower, totalRepayment);
    }

    function getUserLoans(address user) external view returns (uint256[] memory) {
        return userLoans[user];
    }

    function getLoanDetails(uint256 loanId) external view returns (Loan memory) {
        return loans[loanId];
    }
}