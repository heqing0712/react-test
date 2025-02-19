"use client";
import "./styles/page.scss";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import { Input, Button } from "antd";
import { message } from "antd";
import { useAppStore } from "@/store/app";
import { request } from "@/utils/request";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const { searchValue, setSearchValue, balance, setBalance } = useAppStore();

  // 处理输入框值的变化
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  // 处理搜索按钮的点击事件
  const handleSearch = () => {
    console.log("搜索地址：" + searchValue);
    if (!isValidEthereumAddress(searchValue)) {
      message.info("以太坊地址格式有误");
      return;
    }
    // 这里可以添加实际的搜索逻辑，例如发送 API 请求
    console.log("Searching for: ", searchValue);

    // 请求接口
    request
      .get("")
      .then((res) => {
        // res 需要进行判断值，这里测
        setBalance(res);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  };

  // 以太坊测试
  // 测试示例
  const validAddress = "0x1234567890123456789012345678901234567890";
  function isValidEthereumAddress(address: string) {
    // 定义以太坊地址的正则表达式
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
  }

  return (
    <div className="home-container">
      <div className="header">
        <Input
          placeholder="请输入以太坊钱包地址"
          value={searchValue}
          onChange={handleInputChange}
          style={{ width: "300px" }}
        />
        <Button
          type="primary"
          className="btn-search"
          onClick={handleSearch}
          loading={loading}
        >
          查询
        </Button>
      </div>
      <div className="content">余额：{balance}</div>
    </div>
  );
}
