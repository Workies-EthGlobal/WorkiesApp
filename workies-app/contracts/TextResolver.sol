// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./ITextResolver.sol";

abstract contract TextResolver is ITextResolver {
    mapping(bytes32 => mapping(string => string)) texts;

    /**
     * Sets the text data associated with an employee index and a Key.
     * @param index The employee index to update.
     * @param key The key to set.
     * @param value The text data value to set.
     */
    function setText(
        bytes32 index,
        string calldata key,
        string calldata value
    ) external virtual {
        texts[index][key] = value;
        emit TextChanged(index, key, key);
    }

    /**
     * Returns the text data associated with an employee index and key.
     * @param index The employee index to query.
     * @param key The text data key to query.
     * @return The associated text data.
     */
    function text(bytes32 index, string calldata key)
        external
        view
        virtual
        override
        returns (string memory)
    {
        return texts[index][key];
    }
}