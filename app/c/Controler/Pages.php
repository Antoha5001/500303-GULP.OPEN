<?php
	/**
	 * Created by PhpStorm.
	 * User: Anton
	 * Date: 19.03.2018
	 * Time: 17:13
	 */

	namespace Pages;


	class Pages
	{
		public $data;
		public $title;
		public function __construct($settings)
		{
			$this->data = $settings['data'];
		}
		public function getContent(){

		}
	}