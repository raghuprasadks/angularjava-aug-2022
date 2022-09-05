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
        System.out.println("Customer Bean with class name");
        Customer customerBean = applicationContext.getBean(Customer.class);
        System.out.println(customerBean.info());

        System.out.println("Customer Bean with id");
        Customer customerBeanwithId = (Customer)applicationContext.getBean("customer");
        System.out.println(customerBeanwithId.info());
        System.out.println("Customer Bean with properties");
        System.out.println("Id : "+customerBean.getId() + " Name :" +customerBean.getName() +" Location : "+customerBean.getLocation());



    }
}
