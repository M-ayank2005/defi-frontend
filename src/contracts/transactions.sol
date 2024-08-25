// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    struct Transaction {
        address sender;
        address recipient;
        uint256 amount;
        string txHash;
        uint256 timestamp;
    }

    Transaction[] public transactions;

    event TransactionRecorded(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        string txHash,
        uint256 timestamp
    );

    function addTransaction(
        address recipient,
        uint256 amount,
        string memory txHash
    ) public {
        uint256 timestamp = block.timestamp; 
        transactions.push(Transaction({
            sender: msg.sender,
            recipient: recipient,
            amount: amount,
            txHash: txHash,
            timestamp: timestamp
        }));

        emit TransactionRecorded(msg.sender, recipient, amount, txHash, timestamp);
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }
}
