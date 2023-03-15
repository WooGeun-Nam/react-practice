package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmailRepository;
import com.douzone.emaillist.vo.EmailVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmailRepository emailRepository;

	@GetMapping("/email")
	public ResponseEntity<JsonResult> readEmail() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailRepository.findAll()));
	}

	@GetMapping("/email/{keyword}")
	public ResponseEntity<JsonResult> readEmail(@PathVariable("keyword") String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailRepository.searchEmail(keyword)));
	}
	
	@PostMapping("/email")
	public ResponseEntity<JsonResult> addEmail(@RequestBody EmailVo vo) {
		emailRepository.addEmail(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/email/{no}")
	public ResponseEntity<JsonResult> deleteEmail(@PathVariable("no") Long no) {
		emailRepository.deleteEmail(no);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
