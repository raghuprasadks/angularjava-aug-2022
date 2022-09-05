import beans.Customer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringGettingStarted {

    public static void main(String args[]){

        System.out.println("Welcome to Spring");
        System.out.println("Java - create customer object");
        Customer customer = new Customer();
        System.out.println(customer.info());
        System.out.println("Java Spring- create customer object");
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml");
        Customer customerBean = applicationContext.getBean(Customer.class);
        System.out.println(customerBean.info());

    }
}
