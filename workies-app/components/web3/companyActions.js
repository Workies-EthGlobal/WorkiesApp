export const createEmployee = (contract, account, companyName, companyToken) => {
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


export const getNFTSmartContractAddress = (contract, account) => {
    if (!account) return false
    if (contract != "") {
        console.log("called getCompanyManagerContractByOwner");
        console.log(contract);

        return contract.functions.getCompanyManagerContractByOwner(account);
    }

}