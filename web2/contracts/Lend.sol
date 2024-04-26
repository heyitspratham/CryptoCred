// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.0;
// pragma solidity >=0.4.22 <0.7.0;


// import "@openzeppelin/contracts/access/Ownable.sol";
// constructor ()  {
//        owner = msg.sender;
//    }

contract lendContract{
    
    function bal() public view returns(uint256){
        uint256 balance = address(this).balance;

        return balance;

    }

    string public name = "wallet";
    // uint256 public borrowLen =0;
    event transferDone(string propId, address transferto);


    
    struct details {
        uint256 amount;
        string propId;
        uint256 rate;
    }

    struct emiDetails {
        address LendAdd;
        uint256 amount;
        uint256 rate;
    }
    

    mapping (address => details) BorrowList;
    mapping (string => emiDetails) BorrowDetails;
    address[] public borrowers; // Track all borrowers

    function GetAllDetails() public view returns (details[] memory) {
        details[] memory allBorrowDetails = new details[](borrowers.length);
        for (uint256 i = 0; i < borrowers.length; i++) {
            address borrower = borrowers[i];
            allBorrowDetails[i] = BorrowList[borrower];
        }
        return allBorrowDetails;
    }

    function GiveDetails(uint256 _amt, string memory _prop, uint256 _rate) public {
        BorrowList[msg.sender].amount = _amt * 1 ether;
        BorrowList[msg.sender].propId = _prop;
        BorrowList[msg.sender].rate = _rate;
        BorrowDetails[_prop].amount = _amt;
        BorrowDetails[_prop].rate = _rate;
        //borrowLen++;
        borrowers.push(msg.sender);
    }


    function GetDetails(string memory _prop) public view returns(string memory, uint256 , address) {
        return (_prop, BorrowDetails[_prop].amount, BorrowDetails[_prop].LendAdd);
    }

    function GiveLoan(string memory _propId) public payable {
        // require(msg.value == BorrowDetails[_propId].amount * 1 ether , "Give Exact amount of the property ");
        BorrowDetails[_propId].LendAdd = msg.sender;
        emit transferDone(_propId, msg.sender);
    }
    //pay emi
    function PayEmi(string memory _propId) public payable {
        require(msg.value == (BorrowDetails[_propId].amount / BorrowDetails[_propId].rate ) * 1 ether , "Give Exact amount of the EMI");
        emit transferDone(_propId, msg.sender);
    }
    

    function transfer() public payable  {
        // require(BorrowList[msg.sender].amount > 0, "No loan details are found");
        address payable recipient = payable(msg.sender);
        recipient.transfer(address(this).balance);
        // recipient.transfer(BorrowList[msg.sender].amount);
        BorrowList[msg.sender].amount = 0;
    }
}