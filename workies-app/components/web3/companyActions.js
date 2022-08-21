export const createCompanyManager = (contract, account, companyName, companyToken) => {
    if (!account) return false
    if (contract != "") {
        console.log("called contract");
        console.log(contract);
        contract.functions.createCompanyManagerContract(companyName, companyToken);

        contract.functions
            .getCompanyManagerContract(0)
            .then((result) => {
                console.log(result);
            });
    }

}


export const createEmployee = (contract, account, employeeName, employeeSalary) => {
    if (!account) return false
    if (contract != "") {
        console.log("called contract");
        console.log(contract);
        return contract.functions.safeMint(employeeName, employeeSalary);
    }

}




export const getNFTSmartContractAddress = (contract, ownerAddress) => {
    if (!account) return false
    if (contract != "") {
        console.log("called getCompanyManagerContractByOwner");
        console.log(contract);

        return contract.functions.safeMint(ownerAddress);
    }

}

export const getEmployeeList = (contract, NFTaddress) => {

}