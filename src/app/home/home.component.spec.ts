import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass increse',()=>{
    component.counter = 1
    // expect(component.counter + 1).toEqual(2);
    expect(component.counter + 1).not.toEqual(1)
  })

  it('should pass subtraction if', ()=>{
    const numb1 = component.numb1
    const numb2 = component.numb2
    component.subtraction()
    if(numb1 > numb2){
      const r = numb1 - numb2
      expect(r).toEqual(4)
    }else{
      const r = numb2 - numb1
      expect(r).toEqual(4)
    }
  })

  // it('should pass subtraction else', ()=>{
  //   const numb1 = component.numb1
  //   const numb2 = component.numb2
  //   if(numb1 > numb2){
  //     const r = numb1 - numb2
  //     expect(r).toEqual(4)
  //   }else{
  //     const r = numb2 - numb1
  //     expect(r).toEqual(4)
  //   }
  // })

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
});
