package com.udemy.UdemyClone.Controlador;

import com.udemy.UdemyClone.Modelo.User;
import com.udemy.UdemyClone.Servicios.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/udemy/user")
public class UserController {

    /*adcedemos a los servicios*/
    @Autowired
    private UserService userService;


    /**************************************************
                            prueba
     ************************************************* */

    @GetMapping("/h")//End point para mi metodo get user
    public String holaMundo(){
        return "HOLA MUNDO";
    }

    /**************************************************
                            GET
    ************************************************* */

    //se usan anotaciones para los end point
    @GetMapping("/{id}")//End point para mi metodo get user
   public Optional<User> getUser(@PathVariable("id") long id){
      return userService.getUser(id);
   }

    /**************************************************
                            Post
     ************************************************* */

    @PostMapping("registro")
    public User postUser(@RequestBody User user){
        return userService.postUser(user);
    }

    /**************************************************
                            Put
     ************************************************* */

    @PutMapping()
    public User putUser(@RequestBody User user){
        return userService.putUser(user);
    }

    /**************************************************
                            Delete
     ************************************************* */

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") long id){
        userService.deleteUser(id);
    }
}
