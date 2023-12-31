<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>730623b0-005b-4331-8afb-3945a06d72b0</testSuiteGuid>
   <testCaseLink>
      <guid>c32cb722-e055-490b-8d48-bc374f618407</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/Customer/Login/TC1_Verify Successful Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>d92b4a0b-33b4-472e-8095-bb5114cdbe8b</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login/Test Data Fail</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b71f9834-0d0d-4125-869e-7d4bec4f727e</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login/Test Data Success</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>b71f9834-0d0d-4125-869e-7d4bec4f727e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>c2ab5f65-c4c4-45e1-8d67-a8eb4d493ed6</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>b71f9834-0d0d-4125-869e-7d4bec4f727e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>cd327494-70ce-48bc-9514-e8518a0c7c4a</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>7ae65be3-e9ce-403b-9ff1-d4fe8c64b721</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/Customer/Login/TC2_Verify Failed Login-Username Not Exsit</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>65f23e62-d292-40a0-994b-ab52949ef82f</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login/Test Data Fail</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>9232febe-7d73-484b-872f-05136d6d182d</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login/Test Data Success</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>428b3ec0-bb96-41a0-be95-3b7c51948d37</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Customer/Login/TC3_Verify Failed Login-Password Fail</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
