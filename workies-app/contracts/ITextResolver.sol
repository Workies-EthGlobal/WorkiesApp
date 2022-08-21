// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

//Code from
interface ITextResolver {
    event TextChanged(
        bytes32 indexed node,
        string indexed indexedKey,
        string key
    );

    /**
     * Returns the text data associated with employee index and key.
     * @param index The employeeID to query.
     * @param key The text data key to query.
     * @return The associated text data.
     */
    function text(bytes32 index, string calldata key)
        external
        view
        returns (string memory);
}