// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./CompanyManager.sol";

contract CompanyManagerFactory {

    CompanayManager[] public companayManagerArray;

    mapping(address => address) private _companyManagerDict;

    function createCompanyManagerContract(string memory name_, string memory symbol_, ISuperToken _payrollToken, ISuperfluid _host) public {
        CompanayManager companyManager = new CompanayManager(name_,symbol_, _payrollToken, _host);
        companayManagerArray.push(companyManager);
        _companyManagerDict[msg.sender] = address(companyManager);
    }

    function getCompanyManagerContract(uint256 _index) public view returns (address){
        return address(companayManagerArray[_index]);
    }

    function getCompanyManagerContractByOwner(address owner) public view returns (address){
        return address(_companyManagerDict[owner]);
    }
}