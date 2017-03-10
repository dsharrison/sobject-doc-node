module.exports = '<?xml version="1.0" encoding="UTF-8"?> <CustomObject xmlns="http://soap.sforce.com/2006/04/metadata"> <actionOverrides> <actionName>CallHighlightAction</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>CancelEdit</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>Delete</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>Edit</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>EmailHighlightAction</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>EnableCustomerPortalUser</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>Follow</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>List</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>ListClean</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>New</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>RequestUpdate</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>SaveEdit</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>Tab</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>View</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>ViewCustomerPortalUser</actionName> <type>Default</type> </actionOverrides> <actionOverrides> <actionName>WebsiteHighlightAction</actionName> <type>Default</type> </actionOverrides> <compactLayoutAssignment>SYSTEM</compactLayoutAssignment> <enableFeeds>true</enableFeeds> <enableHistory>false</enableHistory> <fields> <fullName>AccountNumber</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>AccountSource</fullName> <picklist> <picklistValues> <fullName>Web</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Phone Inquiry</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Partner Referral</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Purchased List</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Other</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>Active__c</fullName> <externalId>false</externalId> <label>Active</label> <picklist> <picklistValues> <fullName>No</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Yes</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>AnnualRevenue</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>Balance__c</fullName> <externalId>false</externalId> <label>Balance</label> <precision>18</precision> <required>false</required> <scale>2</scale> <trackFeedHistory>false</trackFeedHistory> <type>Currency</type> </fields> <fields> <fullName>BillingAddress</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>CreditLimit__c</fullName> <externalId>false</externalId> <label>Credit Limit</label> <precision>18</precision> <required>false</required> <scale>2</scale> <trackFeedHistory>false</trackFeedHistory> <type>Currency</type> </fields> <fields> <fullName>CustomerPriority__c</fullName> <externalId>false</externalId> <label>Customer Priority</label> <picklist> <picklistValues> <fullName>High</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Low</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Medium</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>Description</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>EffectiveDate__c</fullName> <description>The date the account became active and contained Assets.</description> <externalId>false</externalId> <label>Effective Date</label> <required>false</required> <trackFeedHistory>false</trackFeedHistory> <type>Date</type> </fields> <fields> <fullName>Fax</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>Industry</fullName> <picklist> <picklistValues> <fullName>Agriculture</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Apparel</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Banking</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Biotechnology</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Chemicals</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Communications</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Construction</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Consulting</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Education</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Electronics</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Energy</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Engineering</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Entertainment</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Environmental</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Finance</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Food &amp; Beverage</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Government</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Healthcare</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Hospitality</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Insurance</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Machinery</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Manufacturing</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Media</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Not For Profit</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Recreation</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Retail</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Shipping</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Technology</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Telecommunications</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Transportation</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Utilities</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Other</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>IsCustomerPortal</fullName> </fields> <fields> <fullName>Jigsaw</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>LastExpirationDate__c</fullName> <externalId>false</externalId> <label>Expiration Date</label> <summarizedField>Opportunity.ContractEndDate__c</summarizedField> <summaryFilterItems> <field>Opportunity.ContractEndDate__c</field> <operation>notEqual</operation> <value></value> </summaryFilterItems> <summaryFilterItems> <field>Opportunity.IsWon</field> <operation>equals</operation> <value>True</value> </summaryFilterItems> <summaryForeignKey>Opportunity.AccountId</summaryForeignKey> <summaryOperation>max</summaryOperation> <type>Summary</type> </fields> <fields> <fullName>Name</fullName> <trackFeedHistory>true</trackFeedHistory> </fields> <fields> <fullName>NumberOfEmployees</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>NumberofLocations__c</fullName> <externalId>false</externalId> <label>Number of Locations</label> <precision>3</precision> <required>false</required> <scale>0</scale> <trackFeedHistory>false</trackFeedHistory> <type>Number</type> <unique>false</unique> </fields> <fields> <fullName>OwnerId</fullName> <trackFeedHistory>true</trackFeedHistory> <type>Lookup</type> </fields> <fields> <fullName>Ownership</fullName> <picklist> <picklistValues> <fullName>Public</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Private</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Subsidiary</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Other</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>ParentId</fullName> <trackFeedHistory>false</trackFeedHistory> <type>Hierarchy</type> </fields> <fields> <fullName>Phone</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>Pricebook2Id__c</fullName> <externalId>false</externalId> <label>Pricebook Id</label> <length>18</length> <required>false</required> <trackFeedHistory>false</trackFeedHistory> <type>Text</type> <unique>false</unique> </fields> <fields> <fullName>Pricebook2Name__c</fullName> <externalId>false</externalId> <label>Pricebook Name</label> <length>40</length> <required>false</required> <trackFeedHistory>false</trackFeedHistory> <type>Text</type> <unique>false</unique> </fields> <fields> <fullName>Rating</fullName> <picklist> <picklistValues> <fullName>Hot</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Warm</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Cold</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>SLAExpirationDate__c</fullName> <externalId>false</externalId> <label>SLA Expiration Date</label> <required>false</required> <trackFeedHistory>false</trackFeedHistory> <type>Date</type> </fields> <fields> <fullName>SLASerialNumber__c</fullName> <externalId>false</externalId> <label>SLA Serial Number</label> <length>10</length> <required>false</required> <trackFeedHistory>false</trackFeedHistory> <type>Text</type> <unique>false</unique> </fields> <fields> <fullName>SLA__c</fullName> <externalId>false</externalId> <label>SLA</label> <picklist> <picklistValues> <fullName>Gold</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Silver</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Platinum</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Bronze</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>ShippingAddress</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>Sic</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>SicDesc</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>Site</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>TaxCustomerUsageCode__c</fullName> <externalId>false</externalId> <label>Tax Customer Usage Code</label> <picklist> <picklistValues> <fullName>A) Federal government (United States)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>B) State government (United States)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>C) Tribe / Status Indian / Indian Band (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>D) Foreign diplomat (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>E) Charitable or benevolent org (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>F) Religious or educational org (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>G) Resale (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>H) Commercial agricultural production (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>I) Industrial production / manufacturer (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>J) Direct pay permit (United States)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>K) Direct mail (United States)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>L) Other (both)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>N) Local government (United States)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>P) Commercial aquaculture (Canada)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Q) Commercial Fishery (Canada)</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>R) Non-resident (Canada)</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>TaxExempt__c</fullName> <defaultValue>false</defaultValue> <description>This account&apos;s opportunities will not have tax calculated.</description> <externalId>false</externalId> <label>Tax Exempt</label> <trackFeedHistory>false</trackFeedHistory> <type>Checkbox</type> </fields> <fields> <fullName>TickerSymbol</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <fields> <fullName>Type</fullName> <picklist> <picklistValues> <fullName>Prospect</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Customer - Direct</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Customer - Channel</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Channel Partner / Reseller</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Installation Partner</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Technology Partner</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Other</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>UpsellOpportunity__c</fullName> <externalId>false</externalId> <label>Upsell Opportunity</label> <picklist> <picklistValues> <fullName>Maybe</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>No</fullName> <default>false</default> </picklistValues> <picklistValues> <fullName>Yes</fullName> <default>false</default> </picklistValues> <sorted>false</sorted> </picklist> <trackFeedHistory>false</trackFeedHistory> <type>Picklist</type> </fields> <fields> <fullName>Website</fullName> <trackFeedHistory>false</trackFeedHistory> </fields> <listViews> <fullName>AllAccounts</fullName> <filterScope>Everything</filterScope> <label>All Accounts</label> </listViews> <listViews> <fullName>MyAccounts</fullName> <filterScope>Mine</filterScope> <label>My Accounts</label> </listViews> <listViews> <fullName>NewLastWeek</fullName> <filterScope>Everything</filterScope> <filters> <field>ACCOUNT.CREATED_DATE</field> <operation>equals</operation> <value>LAST_WEEK</value> </filters> <label>New Last Week</label> </listViews> <listViews> <fullName>NewThisWeek</fullName> <filterScope>Everything</filterScope> <filters> <field>ACCOUNT.CREATED_DATE</field> <operation>equals</operation> <value>THIS_WEEK</value> </filters> <label>New This Week</label> </listViews> <listViews> <fullName>PlatinumandGoldSLACustomers</fullName> <columns>ACCOUNT.NAME</columns> <columns>ACCOUNT.SITE</columns> <columns>ACCOUNT.ADDRESS1_STATE</columns> <columns>ACCOUNT.PHONE1</columns> <columns>CORE.USERS.ALIAS</columns> <filterScope>Everything</filterScope> <label>Platinum and Gold SLA Customers</label> </listViews> <recordTypeTrackFeedHistory>false</recordTypeTrackFeedHistory> <recordTypes> <fullName>Business</fullName> <active>true</active> <label>Business Account</label> <picklistValues> <picklist>AccountSource</picklist> <values> <fullName>Other</fullName> <default>false</default> </values> <values> <fullName>Partner Referral</fullName> <default>false</default> </values> <values> <fullName>Phone Inquiry</fullName> <default>false</default> </values> <values> <fullName>Purchased List</fullName> <default>false</default> </values> <values> <fullName>Web</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>Active__c</picklist> <values> <fullName>No</fullName> <default>false</default> </values> <values> <fullName>Yes</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>CustomerPriority__c</picklist> <values> <fullName>High</fullName> <default>false</default> </values> <values> <fullName>Low</fullName> <default>false</default> </values> <values> <fullName>Medium</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>Industry</picklist> <values> <fullName>Agriculture</fullName> <default>false</default> </values> <values> <fullName>Apparel</fullName> <default>false</default> </values> <values> <fullName>Banking</fullName> <default>false</default> </values> <values> <fullName>Biotechnology</fullName> <default>false</default> </values> <values> <fullName>Chemicals</fullName> <default>false</default> </values> <values> <fullName>Communications</fullName> <default>false</default> </values> <values> <fullName>Construction</fullName> <default>false</default> </values> <values> <fullName>Consulting</fullName> <default>false</default> </values> <values> <fullName>Education</fullName> <default>false</default> </values> <values> <fullName>Electronics</fullName> <default>false</default> </values> <values> <fullName>Energy</fullName> <default>false</default> </values> <values> <fullName>Engineering</fullName> <default>false</default> </values> <values> <fullName>Entertainment</fullName> <default>false</default> </values> <values> <fullName>Environmental</fullName> <default>false</default> </values> <values> <fullName>Finance</fullName> <default>false</default> </values> <values> <fullName>Food %26 Beverage</fullName> <default>false</default> </values> <values> <fullName>Government</fullName> <default>false</default> </values> <values> <fullName>Healthcare</fullName> <default>false</default> </values> <values> <fullName>Hospitality</fullName> <default>false</default> </values> <values> <fullName>Insurance</fullName> <default>false</default> </values> <values> <fullName>Machinery</fullName> <default>false</default> </values> <values> <fullName>Manufacturing</fullName> <default>false</default> </values> <values> <fullName>Media</fullName> <default>false</default> </values> <values> <fullName>Not For Profit</fullName> <default>false</default> </values> <values> <fullName>Other</fullName> <default>false</default> </values> <values> <fullName>Recreation</fullName> <default>false</default> </values> <values> <fullName>Retail</fullName> <default>false</default> </values> <values> <fullName>Shipping</fullName> <default>false</default> </values> <values> <fullName>Technology</fullName> <default>false</default> </values> <values> <fullName>Telecommunications</fullName> <default>false</default> </values> <values> <fullName>Transportation</fullName> <default>false</default> </values> <values> <fullName>Utilities</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>Ownership</picklist> <values> <fullName>Other</fullName> <default>false</default> </values> <values> <fullName>Private</fullName> <default>false</default> </values> <values> <fullName>Public</fullName> <default>false</default> </values> <values> <fullName>Subsidiary</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>Rating</picklist> <values> <fullName>Cold</fullName> <default>false</default> </values> <values> <fullName>Hot</fullName> <default>false</default> </values> <values> <fullName>Warm</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>SLA__c</picklist> <values> <fullName>Bronze</fullName> <default>false</default> </values> <values> <fullName>Gold</fullName> <default>false</default> </values> <values> <fullName>Platinum</fullName> <default>false</default> </values> <values> <fullName>Silver</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>TaxCustomerUsageCode__c</picklist> <values> <fullName>A%29 Federal government %28United States%29</fullName> <default>false</default> </values> <values> <fullName>B%29 State government %28United States%29</fullName> <default>false</default> </values> <values> <fullName>C%29 Tribe %2F Status Indian %2F Indian Band %28both%29</fullName> <default>false</default> </values> <values> <fullName>D%29 Foreign diplomat %28both%29</fullName> <default>false</default> </values> <values> <fullName>E%29 Charitable or benevolent org %28both%29</fullName> <default>false</default> </values> <values> <fullName>F%29 Religious or educational org %28both%29</fullName> <default>false</default> </values> <values> <fullName>G%29 Resale %28both%29</fullName> <default>false</default> </values> <values> <fullName>H%29 Commercial agricultural production %28both%29</fullName> <default>false</default> </values> <values> <fullName>I%29 Industrial production %2F manufacturer %28both%29</fullName> <default>false</default> </values> <values> <fullName>J%29 Direct pay permit %28United States%29</fullName> <default>false</default> </values> <values> <fullName>K%29 Direct mail %28United States%29</fullName> <default>false</default> </values> <values> <fullName>L%29 Other %28both%29</fullName> <default>false</default> </values> <values> <fullName>N%29 Local government %28United States%29</fullName> <default>false</default> </values> <values> <fullName>P%29 Commercial aquaculture %28Canada%29</fullName> <default>false</default> </values> <values> <fullName>Q%29 Commercial Fishery %28Canada%29</fullName> <default>false</default> </values> <values> <fullName>R%29 Non-resident %28Canada%29</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>Type</picklist> <values> <fullName>Channel Partner %2F Reseller</fullName> <default>false</default> </values> <values> <fullName>Customer - Channel</fullName> <default>false</default> </values> <values> <fullName>Customer - Direct</fullName> <default>false</default> </values> <values> <fullName>Installation Partner</fullName> <default>false</default> </values> <values> <fullName>Other</fullName> <default>false</default> </values> <values> <fullName>Prospect</fullName> <default>false</default> </values> <values> <fullName>Technology Partner</fullName> <default>false</default> </values> </picklistValues> <picklistValues> <picklist>UpsellOpportunity__c</picklist> <values> <fullName>Maybe</fullName> <default>false</default> </values> <values> <fullName>No</fullName> <default>false</default> </values> <values> <fullName>Yes</fullName> <default>false</default> </values> </picklistValues> </recordTypes> <searchLayouts> <customTabListAdditionalFields>ACCOUNT.NAME</customTabListAdditionalFields> <customTabListAdditionalFields>ACCOUNT.ADDRESS1_CITY</customTabListAdditionalFields> <customTabListAdditionalFields>ACCOUNT.PHONE1</customTabListAdditionalFields> <lookupDialogsAdditionalFields>ACCOUNT.NAME</lookupDialogsAdditionalFields> <lookupDialogsAdditionalFields>ACCOUNT.SITE</lookupDialogsAdditionalFields> <lookupDialogsAdditionalFields>CORE.USERS.ALIAS</lookupDialogsAdditionalFields> <lookupDialogsAdditionalFields>ACCOUNT.TYPE</lookupDialogsAdditionalFields> <lookupPhoneDialogsAdditionalFields>ACCOUNT.NAME</lookupPhoneDialogsAdditionalFields> <lookupPhoneDialogsAdditionalFields>ACCOUNT.SITE</lookupPhoneDialogsAdditionalFields> <lookupPhoneDialogsAdditionalFields>CORE.USERS.ALIAS</lookupPhoneDialogsAdditionalFields> <lookupPhoneDialogsAdditionalFields>ACCOUNT.TYPE</lookupPhoneDialogsAdditionalFields> <lookupPhoneDialogsAdditionalFields>ACCOUNT.PHONE1</lookupPhoneDialogsAdditionalFields> <searchResultsAdditionalFields>ACCOUNT.NAME</searchResultsAdditionalFields> <searchResultsAdditionalFields>ACCOUNT.SITE</searchResultsAdditionalFields> <searchResultsAdditionalFields>ACCOUNT.PHONE1</searchResultsAdditionalFields> <searchResultsAdditionalFields>CORE.USERS.ALIAS</searchResultsAdditionalFields> </searchLayouts> <sharingModel>ReadWrite</sharingModel> <webLinks> <fullName>ManagePricebook</fullName> <availability>online</availability> <displayType>link</displayType> <encodingKey>UTF-8</encodingKey> <height>600</height> <linkType>url</linkType> <masterLabel>Manage Pricebook</masterLabel> <openType>noSidebar</openType> <protected>false</protected> <url>/apex/PricebookAssociation?acctid={!Account.Id}</url> </webLinks> </CustomObject>';
