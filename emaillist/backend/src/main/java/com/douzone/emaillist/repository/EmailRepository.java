package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmailVo;

@Repository
public class EmailRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmailVo> findAll() {
		return sqlSession.selectList("email.findAll");
	}

	public List<EmailVo> searchEmail(String keyword) {
		return sqlSession.selectList("email.searchEmail", keyword);
	}
	
	public void addEmail(EmailVo vo) {
		sqlSession.insert("email.addEmail", vo);
	}
	
	public void deleteEmail(Long no) {
		sqlSession.delete("email.deleteEmail", no);
	}
}
