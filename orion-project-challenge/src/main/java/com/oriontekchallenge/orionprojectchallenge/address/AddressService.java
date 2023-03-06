package com.oriontekchallenge.orionprojectchallenge.address;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AddressService {
    private final AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public List<Address> getAddress(){
        return addressRepository.findAll();
    }

    public void deleteAddress(UUID id) {
        System.out.println(id);
        addressRepository.deleteById(id);
    }

    public void editAddress(Address address) {
        var origAddress = addressRepository.findById(address.getId()).get();

        origAddress.setStreet(address.getStreet());
        origAddress.setCity(address.getCity());
        origAddress.setZipCode(address.getZipCode());
        origAddress.setCountry(address.getCountry());

        addressRepository.save(origAddress);
    }

    public Address get(UUID id) {
        return addressRepository.findById(id).get();
    }
}
