package beans;

public class Address {

    public String getBuildingname() {
        return buildingname;
    }

    public void setBuildingname(String buildingname) {
        this.buildingname = buildingname;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    String buildingname;
    String street;
    String location;

    public Address(String buildingname,String street,String location){
        this.buildingname=buildingname;
        this.street=street;
        this.location=location;
    }
}
