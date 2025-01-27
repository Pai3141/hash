---
title: 🍉LocatingByRFID
createTime: 2024/11/21 19:32:55
draft: true
permalink: /article/mlom62qg/
---

![RFID 系统中相位观测原理示意图](https://raw.githubusercontent.com/Pai3141/PictureBed/main/img/RFID.png)
相位是近年来受到广泛重视的 RFID 位置相关信息。现有的 RFID 读写器一般对
标签反射回来的信号进行完全相干检测，图 2-2 给出了现有读写器内广泛采用的相位
检测原理的示意图。假定读写器发射的前向信号表示为：





本机振荡器通过移相功分器生成正交的两路相干信号（通常为正弦和余弦信号，称为I路和Q路）

(背向信号)*(正交后的相干信号)?
实现相干解调，从而提取出信号的幅度和相位信息。


所得两路信号分别经过低通滤波器，滤除高频部分，可得两路正交的基带信号：


纸相当于信息信号，石头相当于载波信号，纸包着石头相当于调制后的信号。
调制信号 = 原信号 + 载波信号
请注意，载波信号的频率总是很高，这意味着调制后的信号也具有很高的频率和能量；从调制信号的频率可以很容易地得到原始信号的值。
通过调制，原始信号的信息被转移到了载波的频率变化上，而解调的过程本质上是从调制信号中分离出频率与原始信号的对应关系。



通过连线倾角 θ 作为观测相位的核心原因在于 IQ 平面可以直接反映信号的相位变化，而倾角计算简单可靠，不受幅值影响。
观测相位的提取利用了几何特性，可以高效解码调制信息，并提高了 RFID 系统在复杂环境下的稳定性和鲁棒性。