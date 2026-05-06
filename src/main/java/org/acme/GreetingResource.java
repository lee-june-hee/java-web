package org.acme;    // 정확히 명시하지 않으면 error 뜸

import jakarta.ws.rs.GET;       // C++에서 사용하는 include 같은거
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")         // hello world 같은거
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus REST";
    }
}
