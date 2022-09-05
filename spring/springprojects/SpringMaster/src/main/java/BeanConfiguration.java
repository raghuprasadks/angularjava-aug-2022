import beans.Product;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "beans")
public class BeanConfiguration {
    @Bean
    public Product product(){
        return new Product();
    }

}
