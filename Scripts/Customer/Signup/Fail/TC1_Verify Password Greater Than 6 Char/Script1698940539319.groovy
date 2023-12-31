import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('http://localhost:5000/signup')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Username_username'), 'katalon6')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Password_password'), '1234')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Comfirm Password_confirmpassword'), '1234')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Email_email'), 'katalon6@katalon.com')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Age_age'), '20')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Phone_phone'), '0123456789')

WebUI.setText(findTestObject('Page_Web Phone/Signup/input_Address_address'), 'Cau Giay - Ha Noi')

WebUI.click(findTestObject('Page_Web Phone/Signup/button_Sign up'))

WebUI.verifyElementPresent(findTestObject('Page_Web Phone/Signup/button_Sign up'), 1)

WebUI.closeBrowser()

