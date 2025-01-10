package com.udemy.UdemyClone.Controlador;

import com.udemy.UdemyClone.Modelo.User;
import org.springframework.web.bind.annotation.*;

public class UserController {
    private User user;


    /*TODO Metodos*/

    /**************************************************
                            GET
    ************************************************* */

    //se usan anotaciones para los end point
    @GetMapping("/url")//End point para mi metodo get user
   public User getUser(){
      return null;
   }

    /**************************************************
                            Post
     ************************************************* */

    @PostMapping("url")
    public User postUser(){
        return null;
    }

    /**************************************************
                            Put
     ************************************************* */

    @PutMapping("url")
    public User putUser(){
        return null;
    }

    /**************************************************
                            Patch
     ************************************************* */

    @PatchMapping("url")
    public User patchUser(){
        return null;
    }

    /**************************************************
                            Delete
     ************************************************* */

    @DeleteMapping("url")
    public User deleteUser(){
        return null;
    }

}
