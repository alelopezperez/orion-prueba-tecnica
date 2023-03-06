package com.oriontekchallenge.orionprojectchallenge.client;

import com.oriontekchallenge.orionprojectchallenge.address.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

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

    public void addAddress(Address address, UUID clientId){
        Client client = clientRepository.findById(clientId).get();


        Set<Address>  lAddress = client.getAddress();
        lAddress.add(address);
        client.setAddress(lAddress);

        System.out.println(client);

        clientRepository.save(client);
    }

    public List<Address> getClientAddress(UUID clientId) {
        Client client = clientRepository.findById(clientId).get();


        return new ArrayList<>(client.getAddress());
    }

    public void editClient(Client client) {

        clientRepository.save(client);
    }

    public Client getClient(UUID id){
        return clientRepository.findById(id).get();
    }

    public void deleteAddress(UUID clientId, UUID addressId) {
        var client = clientRepository.findById(clientId).get();
        var addresses = client.getAddress();

        System.out.println(client.getAddress());
        System.out.println(addressId);
        client.setAddress(
            addresses
                    .stream()
                    .filter(item -> !(item.getId().equals(addressId)))
                    .collect(Collectors.toSet())
        );

        System.out.println(client.getAddress());

//        clientRepository.save(client);


    }
}
