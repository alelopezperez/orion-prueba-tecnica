package com.oriontekchallenge.orionprojectchallenge.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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

    @PostMapping("")
    public void createNewClient(@RequestBody Client client){
        clientService.createNewClient(client);
    }

    @PostMapping("delete")
    public void deleteClient(@RequestBody UUID clientId){
        clientService.deleteClient(clientId);
    }
}
