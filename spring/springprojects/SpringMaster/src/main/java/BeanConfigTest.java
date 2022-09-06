import beans.Product;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.w3c.dom.ls.LSOutput;

public class BeanConfigTest {

    public static void main(String args[]){
        System.out.println("BeanConfig Test");
        ApplicationContext context =  new AnnotationConfigApplicationContext(BeanConfiguration.class);
        Product product = context.getBean(Product.class);
        System.out.println(product.info());
    }
}
