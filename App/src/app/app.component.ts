import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import 'rxjs/add/operator/map';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'API DATA!!';
    //private apiurl = 'https://address-book-demo.herokuapp.com/api/contacts';
    private apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=3779a91c';
    data: any = {};

	objEmployee = new Employee;
	BaseUrl: string;
    EndPoint: string;
	
	
    constructor(private http: HttpClient) {
        console.log('Hello');
        //this.getContacts();
        //this.getData();
		this.BaseUrl = "http://localhost:64214/MyWebService.asmx";
		this.EndPoint = "/ProcessRequest";
    }
	
	ngOnInit(){
		this.objEmployee.EmployeeId = "123";
        this.objEmployee.Name = "Test";
		
		
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
            //.set('Authorization', 'Basic loremlorem'); //we can add more headers like this

			
        this.http.post(this.BaseUrl + this.EndPoint, "{'SerializedObject':'something'}", { headers })
            .subscribe(
            res => {
                    //let jsonObject = JSON.parse(res.toString());
                    //console.log(jsonObject.d);
                    console.log(res);
                },
            err => {

                    console.log("Error occured");
                }
            );
		
	}
	
    getData() {
        return this.http.get(this.apiurl)
            .map((res: Response) => res.json())
    }
	
    getContacts() {
        this.getData().subscribe(data => {
            console.log(data);
            this.data = data;
        })
    }
    
}

class Employee{
	EmployeeId: string;
	Name: string;
}