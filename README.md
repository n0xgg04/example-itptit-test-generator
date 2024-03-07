## Tàu chiến AC715

Tàu chiến Alpha C715 nổi tiếng là băng đảng khét tiếng chuyên đánh cắp tài nguyên, vũ khí của các hành tinh xung quanh. Alice, một nhà bác học tài ba được quân nổi loạn cứu sau thảm gia vũ trụ năm 2326. Sau khi được cứu, Alice trở thành một trợ thủ đắc lực, trung thành của tàu chiến.

Alpha C715 có 𝑠 tàu vũ trụ, mỗi tàu có một sức mạnh tấn công là 𝑎.

Họ muốn gửi các tàu vũ trụ của mình để phá hủy các căn cứ của Đế chế Silicon và đánh cắp đủ vàng và vũ khí và các nguồn tài nguyên cần thiết.

Đế chế Silicon có 𝑏 căn cứ, mỗi căn cứ có một sức mạnh phòng thủ nhất định 𝑑, và một lượng tài nguyên 𝑔 cụ thể.

Mỗi tàu vũ trụ có thể tấn công tất cả các căn cứ có sức mạnh phòng thủ nhỏ hơn hoặc bằng sức mạnh tấn công của tàu.

Nếu một tàu vũ trụ tấn công một căn cứ thành công, sẽ đánh cắp toàn bộ tài nguyên ở căn cứ đó.

Đội quân Alpha C715 vẫn chưa quyết định được sẽ cho tàu vũ trụ nào tấn công trước, nên họ đã yêu cầu sự giúp đỡ của Alice. Họ muốn biết, đối với mỗi tàu vũ trụ, số lượng tài nguyên tối đa mà nó có thể lấy được.

### Input:

- Dòng đầu tiên chứa các số nguyên 𝑠 và 𝑏 (1≤𝑠,𝑏≤10<sup>5</sup>), lần lượt là số lượng tàu vũ trụ và số lượng căn cứ.

- Dòng thứ hai chứa 𝑠 số nguyên 𝑎 (0≤𝑎≤10<sup>9</sup>), là sức mạnh tấn công của mỗi tàu vũ trụ.

- Những dòng tiếp theo có 𝑏 dòng, mỗi dòng chứa các số nguyên 𝑑,𝑔 (0≤𝑑≤10<sup>9</sup>, 0≤𝑔≤10<sup>4</sup>), lần lượt là sức mạnh phòng thủ và tài nguyên của từng căn cứ.

## Đầu ra

- In ra 𝑠 số nguyên, là số lượng tài nguyên tối đa mà mỗi tàu vũ trụ có thể đánh cắp, thứ tự như thứ tự tàu vũ trụ nhập vào

## Example

#### INPUT:

```cpp
5 4
1 3 5 2 4
0 1
4 2
2 8
9 4
```

#### OUTPUT:

```cpp
1 9 11 9 11
```
