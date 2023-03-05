package com.oriontekchallenge.orionprojectchallenge.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getClients(){
       return clientRepository.findAll();
    }

    public void createNewClient(Client client) {
        Optional<Client> clientByEmail = clientRepository.findByClientEmail(client.getEmail());

        if(clientByEmail.isPresent()){
            throw new IllegalStateException("Email ya esta en uso");
        }
        else {
            clientRepository.save(client);
            System.out.println("HEY");
        }
    }

    public void deleteClient(UUID clientId) {
        if(clientRepository.findById(clientId).isPresent()){
            clientRepository.deleteById(clientId);
        }
        else{
            throw new IllegalStateException("Cliente No Existe");
        }
    }
}
