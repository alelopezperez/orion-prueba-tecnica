package com.oriontekchallenge.orionprojectchallenge.address;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/address/")
public class AddressController {

    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("delete")
    public void deleteAddress(@RequestBody Map<String,String> json){
        UUID id = UUID.fromString(json.get("addressId"));
        System.out.println("here");
        addressService.deleteAddress(id);
    }

}
