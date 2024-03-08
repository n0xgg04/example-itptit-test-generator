## Hướng dẫn sử dụng tool sinh test tự động

- Author: [@n0xgg04](https://github.com/n0xgg04)

### Cài đặt môi trường

1. Cài đặt môi trường NodeJS (trên mạng đầy)
2. Setup môi trường g++ ( Đảm bảo khi sử dụng cmd/terminal gõ ``g++ -v`` ra phiên bản g++ trên máy )

### Clone chương trình
Chạy lệnh sau để clone về máy
```bash
git clone https://github.com/n0xgg04/example-itptit-test-generator.git
```

### Khởi tạo
1. Cài dependencies :
```bash
npm install
```

Để chạy trình tạo test:
```bash 
npm start
```

Nếu chạy ``npm start`` bị lỗi, hãy chạy lệnh sau
```bash 
npm i tsx -g
```
và chạy lại ``npm start``

Cách setup file ``index.ts`` vui lòng xem ở trang [https://github.com/n0xgg04/itptit-testcase-generator](https://github.com/n0xgg04/itptit-testcase-generator)
