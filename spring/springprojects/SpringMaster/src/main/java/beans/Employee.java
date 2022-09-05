package beans;

public class Employee {
    int code;
    String name;
    String dept;

    public Employee(int code,String name,String dept){
        this.code = code;
        this.name =name;
        this.dept = dept;
    }

    public String info(){
        return "Employee : Code :"+this.code +" Name : "+this.name + "Department "+this.dept;
    }
}
