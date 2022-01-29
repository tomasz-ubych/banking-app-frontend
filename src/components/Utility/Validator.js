export function alertValidIBAN(iban) {
    alert(isValidIBANNumber(iban));
}

/*
 * Returns 1 if the IBAN is valid 
 * Returns FALSE if the IBAN's length is not as should be (for CY the IBAN Should be 28 chars long starting with CY )
 * Returns any other number (checksum) when the IBAN is invalid (check digits do not match)
 */
export function isValidIBANNumber(input) {
    var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), 
    code = iban.match(/^(\d{2})([A-Z\d]+)$/), 
            digits;
    // check syntax and length
    if (!code || iban.length !== 26) {
        return false;
    }
    // rearrange country code and check digits, and convert chars to ints
    digits = (code[2] + "PL" + code[1]).replace(/[A-Z]/g, function (letter) {
        return letter.charCodeAt(0) - 55;
    });
    return mod97(digits);
}

function mod97(string) {
    var checksum = string.slice(0, 2), fragment;
    for (var offset = 2; offset < string.length; offset += 7) {
        fragment = String(checksum) + string.substring(offset, offset + 7);
        checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
}