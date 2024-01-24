import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CommonService } from '../service/common.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let commonServiceMock: any;
  beforeEach(() => {
    commonServiceMock = {
      getApi: jest.fn()
    }
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        {
          provide: CommonService, useValue: commonServiceMock
        }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass increse',()=>{
    component.counter = 1
    expect(component.counter + 1).toEqual(2)
  })

  it('should pass subtraction if', ()=>{
    const numb1 = component.numb2
    const numb2 = component.numb1
    component.subtraction()
    // if(numb1 > numb2){
      const r = numb1 - numb2
      expect(r).toEqual(4)
    // }
  })

  it('should pass subtraction else', ()=>{
    const numb1 = component.numb1
    const numb2 = component.numb2
    component.subtraction()
    const r = numb1 - numb2
    expect(r).toEqual(-4)
  })

  it('null', ()=>{
    const n = null
    expect(n).toBeNull()
    // expect(n).not.toBeDefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  it('zero', ()=>{
    const n = 0
    expect(n).not.toBeNull()
    expect(n).toBeDefined()
    // expect(n).not.toBeDefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  it('number',()=>{
    const v = 2
    expect(v).toBe(2)
    expect(v).toEqual(2)
  })

  it('add floating',()=>{
    const v = .3 + .1
    expect(v).toBeCloseTo(.4)
  })

  it('string',()=>{
    expect('Dhiman').toMatch(/Dhiman/)
  })

  it('check array', ()=>{
    const arr = [
      1,2,3,4,5,6,7,8,9,9,2,4,5
    ]
    expect(arr).toContain(5)
    expect(new Set(arr)).toContain(5)
  })

  it('errorExcp exception',()=>{
    expect(()=> component.errorExcp()).toThrow()
    expect(()=> component.errorExcp()).toThrow(Error)

    expect(()=> component.errorExcp()).toThrow(/error/)
    expect(()=> component.errorExcp()).toThrow('This is a Angular error')


  })

  it('should pass callApi',()=>{
    const succmsg = {
      Name:'Dhiman'
    }

    jest.spyOn(commonServiceMock,'getApi').mockReturnValue(of(succmsg));
    fixture.detectChanges();
    expect(component.serviceData).toBe(succmsg)
  })
});
