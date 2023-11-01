<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Signup</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>5b93b50c-665f-40d0-a250-3a7c3b6c2c0a</testSuiteGuid>
   <testCaseLink>
      <guid>378cf256-361c-4d41-b1e3-21854f597da7</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>9e005e71-5d3e-4db5-aceb-b3dc9a1706ea</id>
         <masked>false</masked>
         <name>Password</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Signup/Success/test-use-data file</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>4539f71a-e776-49ad-b440-c87005b089bc</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Signup/Test Data Signup</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>c0dc67f1-4b8a-4f17-8b4d-39de510f7087</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>9e005e71-5d3e-4db5-aceb-b3dc9a1706ea</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Comfirm Password</value>
         <variableId>3c8bdd56-c6b8-4870-a190-fc195cdcbf33</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Email</value>
         <variableId>63e70837-646c-42d8-9b87-fa406757ce07</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Age</value>
         <variableId>a6c601e4-0a2a-4459-9196-b373a6f25fe7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Phone</value>
         <variableId>0b7ff14f-7306-4b7c-9805-1af952db2619</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4539f71a-e776-49ad-b440-c87005b089bc</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Address</value>
         <variableId>67c22adb-7b3d-4b7b-a52f-a30dfeb1fe40</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>a34de109-368f-46a4-9f31-6a3a48fee34f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Signup/Fail/test-user-exsits</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>7eb456f5-61cf-4a83-bd75-a9fa6d23c7d1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Signup/Fail/test-password-not-same</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>777e43ce-e070-4bfc-900e-8dd935644b37</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/Signup/Fail/test-leak-gmail</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
