# 单词拆分 II

## 题目描述

给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

## 输入示例

s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]

## 输出示例

[
  "cats and dog",
  "cat sand dog"
]

## 输入示例2

s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]

## 输出示例2

[]