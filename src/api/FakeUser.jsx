import {Chance} from 'chance'

const chance=Chance();

export const FakeUser=()=>{
   return  chance.name({last: true });

}