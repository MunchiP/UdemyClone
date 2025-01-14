package com.udemy.UdemyClone.Servicios;

import com.udemy.UdemyClone.Modelo.User;
import com.udemy.UdemyClone.Repositorio.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/*
*---@Service---
*utilizan normalmente para implementar la lógica de negocio de tu aplicación,
*separándola de la lógica de acceso a datos (@Repository) y del manejo de
*peticiones HTTP (@Controller).*/
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    /*
    * optener usuario
    * */

    //usamos optional por que no sabemos si nos va a llegar el usuario
    public Optional<User>getUser(long id){
        return userRepository.findById(id);
    }

    /*
     * guardar usuario
     * */

    public User postUser(User user){
        return userRepository.save(user);
    }

    /*
     * Actulizar un ususario
     * */

    public User putUser(User user){
         return userRepository.save(user);
    }


    /*
     * eliminar usuario
     * */

    public void deleteUser(long id){
        userRepository.deleteById(id);
    }

}
