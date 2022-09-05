package beans;

public class Employee {
    int code;
    String name;
    String dept;

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    Address address;

    public Employee(int code,String name,String dept){
        this.code = code;
        this.name =name;
        this.dept = dept;
    }

    public Employee(int code,String name,String dept,Address address){
        this.code = code;
        this.name =name;
        this.dept = dept;
        this.address=address;
    }
    public String info(){
        return "Employee : Code :"+this.code +" Name : "+this.name + "Department "+this.dept;
    }
}
