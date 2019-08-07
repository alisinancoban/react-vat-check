import axios from 'axios';

const mapToData = (responseData) => {
    return {
        number: responseData.vat_number,
        name: responseData.trader_name,
        address: responseData.trader_address,
        isValid: responseData.valid
    };
};

const BASE_URL = 'https://vat.anilcancakir.com/api/vat/check?vat_number=';

export class VATService {    
    
    check(vatNumber) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${BASE_URL}/${vatNumber}`)
                .then(response => {
                    if (response.data) {
                        console.log(response);
                        resolve({
                            [vatNumber]: mapToData(response.data.data)
                        });
                    }
                })
                .catch(error => reject(error.message));
        });
    }    
}