package com.oriontekchallenge.orionprojectchallenge.address;

import com.oriontekchallenge.orionprojectchallenge.client.Client;
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
        addressRepository.deleteById(id);
    }
}
