---
title: 🎯RFID
tags: 
  - IoT
  - RFID
createTime: 2024/11/07 19:37:54
permalink: /article/t6pv1au0/
---

## 📡 RFID

### 📖 什么是RFID

RFID (Radio-Frequency Identification) 是一种无线通信技术，能够通过电磁波自动识别和跟踪附着在物体上的标签 (tag)。通过 RFID 技术，可以获取与标签关联的物体的唯一信息，而无需物理接触或线路连接。

### ⚙️ RFID的组成

- **标签 (Tag)**  
  标签是一个微型设备，内部包含射频电路和存储信息的芯片：
    - 🔵 **无源标签**：从读取器发出的射频信号中获取能量被动响应
    - 🟢 **有源标签**：内置电池，能够主动发送射频信号

- **读取器 (Reader)**  
  负责发送射频信号，并接收标签返回的反射信号。

- **天线 (Antenna)**  
  用于发送和接收射频信号，连接标签和读取器。

### 🌐 RFID的频率划分

1. **低频 (LF)** 
    - 频率范围：125 kHz ~ 134.2 kHz
    - 读取距离：通常不超过 10 厘米
    - 应用：动物识别 🐕、门禁控制 🚪、汽车防盗系统 🚗
    - 特点：抗干扰强，能穿透液体和金属等介质

2. **高频 (HF)** 
    - 频率范围：13.56 MHz
    - 读取距离：可达 1.5 米
    - 应用：支付系统 💵、图书馆管理 📚、智能卡 💳
    - 特点：不易受水或金属干扰，适合中等距离应用

3. **超高频 (UHF)** 
    - 频率范围：860 MHz ~ 960 MHz
    - 读取距离：可达 3 米
    - 应用：物流 📦、仓储 📥、供应链管理 🚛
    - 特点：读取速度高，适合大规模跟踪

4. **微波 (Microwave / SHF)** 
    - 频率范围：2.45 GHz 和 5.8 GHz
    - 读取距离：可超过 300 英尺
    - 应用：收费系统 💳、车辆识别 🚗
    - 特点：传输速度快，适用于远距离和大容量数据传输

>[!note]
>RFID技术的不同频率带之间的主要差别在于读取范围、数据传输速率、抗干扰能力、成本、标签尺寸、能量消耗和适用的应用场景。
> - 🟢 **低频**：短距离，适合穿透性强的应用
> - 🔵 **高频**：中等距离，速度较快
> - 🟣 **超高频**：长距离，适合快速读取
> - 🔴 **微波**：远距离、大容量传输