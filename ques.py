#다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.

#입력
#    다섯 자리로 이루어진 1개의 정수를 입력받는다.
#    단 10,000 <= 입력받는수 <= 99,999
#출력
#    각 자리의 숫자를 분리해 한줄의 하나씩 []속에 넣어 출력한다.

#입력예시
#    75254
#출력예시
#    [70000]
#    [5000]
#    [200]
#    [50]
#    [4]

a, b, c, d, e = input(str('숫자를 입력하세요 : '))
print(int(a) * 10000)
print(int(b) * 1000)
print(int(c) * 100)
print(int(d) * 10)
print(int(e))
