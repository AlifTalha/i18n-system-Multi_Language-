http://localhost:3000/api/persons   => 

{
  "name": {
    "en": "John Doe",
    "bn": "জন ডো",
    "cn": "约翰·多",
    "ar": "جون دو"
  },
  "address": {
    "en": "Dhaka, Bangladesh",
    "bn": "ঢাকা, বাংলাদেশ",
    "cn": "达卡, 孟加拉国",
    "ar": "دكا، بنغلاديش"
  }
}


=> for get information use header  > Accept-Language   bn     => postman


mkdir file_name
cd file_name
npm init -y
npm install express prisma @prisma/client joi cors dotenv
npx prisma init
