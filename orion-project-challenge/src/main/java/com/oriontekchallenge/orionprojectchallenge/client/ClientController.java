package com.oriontekchallenge.orionprojectchallenge.client;

import com.oriontekchallenge.orionprojectchallenge.address.Address;
import com.oriontekchallenge.orionprojectchallenge.address.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path = "api/v1/client/")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("get-clients")
    public List<Client> getClients(){
       return clientService.getClients();
    }

    @PostMapping("create-client")
    public void createNewClient(@RequestBody Client client){
        clientService.createNewClient(client);
    }

    @PostMapping("delete")
    public void deleteClient(@RequestBody Map<String,String> clientId){

        UUID id = UUID.fromString(clientId.get("clientId"));
        clientService.deleteClient(id);
    }

    @PostMapping("add-address")
    public void addAddress(@RequestBody Map<String,String> json){
        System.out.println(json);
        Address address = new Address(json.get("street"),json.get("zipCode"),json.get("city"),json.get("country"));
        System.out.println(address.toString());

        clientService.addAddress(address,UUID.fromString(json.get("clientId")));
    }

    @PostMapping("get-client-address")
    public List<Address> getClientAddress(@RequestBody Map<String,String> json){
        UUID id = UUID.fromString(json.get("clientId"));

        return clientService.getClientAddress(id);
    }

    @PostMapping("edit-client")
    public void editClient(@RequestBody Client client){
        System.out.println(client);

        Client origClient = clientService.getClient(client.getId());

        origClient.setEmail(client.getEmail());
        origClient.setFirstName(client.getFirstName());
        origClient.setLastName(client.getLastName());
        origClient.setBirthDate(client.getBirthDate());

        clientService.editClient(origClient);

    }

    @PostMapping("get-client")
    public Client getClient(@RequestBody Map<String,String> json){
        System.out.println(json);
        UUID id = UUID.fromString(json.get("id"));
        return clientService.getClient(id);
    }

    @PostMapping("delete-address")
    public void deleteAddress(@RequestBody Map<String,String> json){

        UUID clientId = UUID.fromString(json.get("clientId"));
        UUID addressId = UUID.fromString(json.get("addressId"));

        clientService.deleteAddress(clientId,addressId);

    }




}
