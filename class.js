function User(first, last) {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
} 
//prototype??
// 중복된 코드를 통일화해서 메모리를 효휼적으로 관리 해줄수 있다
// 함수에 숨어져있는 prototype이라는 속성에 getFullName을 할당해 주면 그 외 객체를 만들던 그 메모리에 한번만 만들어짐(다른 객체들이 참조함)

const seyoung = new User('Jang', 'seyoung') //user = 생성자 함수 , seyoung = 인스턴스
const 짱구 = new User('신', '짱구')

//this = 생성자 함수를 통해 그것이 할당되어져 있는 객체를 지칭한다
//인스턴스 = new라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환해서 할당된 그 변수

console.log(seyoung.getFullName())
console.log(짱구)


//this
//일반(Normal)의 함수는 '호출 위치'에서 따라 this 정의!
//화살표(Arrow) 함수는 자신이 선언된 '함수 범위'에서 this 정의!

const 세영 = {
  name: '세영',
  normal: function() {
    console.log(this.name)
  }, 
  arrow: () => {
    console.log(this.name)
  }
}
세영.normal() // =>세영
세영.arrow() // =>undefined


const 미니언즈 = {
  name: '미니언즈',
  normal: 세영.normal,
  arrow: 세영.arrow
}

미니언즈.normal() // =>미니언즈
미니언즈.arrow() // =>undefined


const timer = {
  name: '장세영',
  timeout: function () {
    setTimeout(function() {
      console.log(this.name)
    }, 2000)
  }
}

timer.timeout()

const time = {
  name: '세영이',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
time.timeout()


//ES6 Classes = prototype의 문법을 좀더 간결하게 사용

class Me {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const A = new Me('A', 'B') 
const C = new Me('C', 'D')

console.log(A.getFullName())
console.log(C)


//상속(확장) = extends
//class를 사용한다는 것은 이미 만들어져있는 어떠한 정보에 추가적인 살을 붙여서 새로운 기능을 확장이라는 개념으로 관리하는 개념
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
//하나의 인스턴스 생성
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
} //여기서 super는 Vehicle을 의미

const myBicycle = new Bicycle('삼천리', 2)
const sonBicycle = new Bicycle('세발자전거', 3)
console.log(myBicycle)
console.log(sonBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const myCar = new Car('RR', 4, true)
const sonCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(sonCar)