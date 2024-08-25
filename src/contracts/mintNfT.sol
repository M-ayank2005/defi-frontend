// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleNFT {
    string public name = "MyNFT";
    string public symbol = "NFT";
    uint public nextTokenId;
    address public admin;

    mapping(uint => address) private _owners;
    mapping(address => uint) private _balances;
    mapping(uint => string) private _tokenURIs;

    event Transfer(address indexed from, address indexed to, uint indexed tokenId);
    event Mint(address indexed to, uint indexed tokenId);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    enum MintType { addressTokenURI, addr }

      function mintToken(MintType typeOfMint, address to, string memory tokenURI) external onlyAdmin  {
    if (typeOfMint == MintType.addressTokenURI) {
        require(to != address(0), "Invalid address");
        
        uint tokenId = nextTokenId;
        nextTokenId++;

        _owners[tokenId] = to;
        _balances[to]++;
        _tokenURIs[tokenId] = tokenURI;

        emit Transfer(address(0), to, tokenId);
        emit Mint(to, tokenId);
    } else if (typeOfMint == MintType.addr) {
        // mint a new NFT without specifying the URI
    }
}

    function ownerOf(uint tokenId) external view returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "Token does not exist");
        return owner;
    }

    function balanceOf(address owner) external view returns (uint) {
        return _balances[owner];
    }

    function tokenURI(uint tokenId) external view returns (string memory) {
        require(_owners[tokenId] != address(0), "Token does not exist");
        return _tokenURIs[tokenId];
    }
}
