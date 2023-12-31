/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface paths {
  "/navigation": {
    /** Get root Folder. */
    get: operations["GetNavigationRoot"];
  };
  "/navigation/{id}": {
    /** Gets Folder by {id}. */
    get: operations["GetNavigationById"];
  };
  "/tables": {
    /** Get all Tables. */
    get: operations["ListAllTables"];
  };
  "/tables/{id}": {
    /** Get Table by {id}. */
    get: operations["GetTableById"];
  };
  "/tables/{id}/metadata": {
    /**
     * Get Metadata about Table by {id}.
     * @description **Used for listing detailed information about a specific table**
     * * List all variables and values and all other metadata needed to be able to fetch data
     *
     * * Also links to where to:
     *   + Fetch
     *   - Where to get information about codelists
     *
     * * 2 output formats
     *   + Custom json
     *   - JSON-stat2
     */
    get: operations["GetMetadataById"];
  };
  "/codelists/{id}": {
    /** Get Codelist by {id}. */
    get: operations["GetTableCodeListById"];
  };
  "/tables/{id}/data": {
    /** Get data from table by {id}. */
    get: operations["GetTableData"];
    /** Get data from table by {id}. */
    post: operations["GetTableDataByPost"];
  };
  "/config": {
    /** Get API configuration settings. */
    get: operations["GetApiConfiguration"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    VariablesSelection: {
      selection: components["schemas"]["VariableSelection"][];
    };
    VariableSelection: {
      /** @description The variable code. */
      variableCode: string;
      /** @description The identifier of the codelist that should be applied */
      codeList?: string | null;
      /**
       * @description If an codelist has been applied then how the resulting values should be constructed.
       * @default Aggregated
       */
      outputValues?: components["schemas"]["CodeListOutputValuesType"];
      /** @description An array of string that specifies wich values sould be selected. Either as value codes or value expressions */
      valueCodes?: string[];
    };
    /** @enum {string} */
    MetadataOutputFormatType: "json-px" | "json-stat2";
    /** @description API configuration */
    ConfigResponse: {
      /** @description The version of then API */
      apiVersion: string;
      /** @description A list of language that exists for the data. */
      languages: components["schemas"]["Language"][];
      /** @description The id of the language that is the default language. */
      defaultLanguage: string;
      /** @description A threshold of how many datacells that can be fetched in a single API call */
      maxDataCells: number;
      /** @description The maximum number of call to the API for a time window indicated by timeWindow. */
      maxCallsPerTimeWindow?: number;
      /** @description The time window restricting how many call that can be done. */
      timeWindow: number;
      /** @description The license that the data is provided. */
      license: string;
      /** @description A list of how the data should be cite for diffrent languages. */
      sourceReferences?: components["schemas"]["SourceReference"][];
      /** @description The default metadata format to used when no format is specified in the request. */
      defaultMetadataFormat: components["schemas"]["MetadataOutputFormatType"];
      /** @description The default data format to used when no format is specified in the request. */
      defaultDataFormat: string;
      /** @description List of available data formts for fetching data in. */
      dataFormats: string[];
      /** @description A list of features for the API */
      features?: components["schemas"]["ApiFeature"][];
    };
    /** @description Language information */
    Language: {
      /** @description The language ISO code */
      id: string;
      /** @description The name of the language */
      label: string;
    };
    /** @description How data should be cite for a specific language */
    SourceReference: {
      /** @description The language id */
      language: string;
      /** @description The text that should be displayed */
      text: string;
    };
    ApiFeature: {
      /** @description The identifyer for the feature */
      id: string;
      params?: components["schemas"]["KeyValuePair"][];
    };
    KeyValuePair: {
      /** @description The key */
      key: string;
      /** @description The value associated with the key */
      value: string;
    };
    /** @enum {string} */
    CodeListOutputValuesType: "aggregated" | "single";
    /** @enum {string} */
    FolderContentItemTypeEnum: "Heading" | "FolderInformation" | "Table";
    /** @description Navigation item. */
    FolderContentItem: {
      /** @description One of Heading, Table or FolderInformation */
      type: components["schemas"]["FolderContentItemTypeEnum"];
      id: string;
      /** @description Display text */
      label: string | null;
      /** @description Longer text describing node. */
      description?: string | null;
      /** @description String for sorting the contents in folder */
      sortCode?: string;
    };
    /** @description Folder item */
    FolderResponse: {
      /** @description The language code (ISO 639) for this response */
      language: string;
      id: string | null;
      /** @description Display text */
      label: string | null;
      /** @description Longer text describing node. */
      description?: string | null;
      tags?: string[];
      folderContents: components["schemas"]["FolderContentItem"][] | null;
      /** @description Links to ... */
      links: components["schemas"]["Link"][] | null;
    };
    /** @description Folder information item */
    FolderInformation: WithRequired<({
      objectType: "FolderInformation";
      tags?: string[];
      /** @description Links to ... */
      links: components["schemas"]["Link"][] | null;
    }) & Omit<components["schemas"]["FolderContentItem"], "objectType">, "links">;
    /** @description Heading item */
    Heading: {
      objectType: "Heading";
    } & Omit<components["schemas"]["FolderContentItem"], "objectType">;
    TableResponse: WithRequired<{
      /** @description The language code (ISO 639) for this response */
      language: string;
    } & components["schemas"]["Table"], "language">;
    /** @description Table item */
    Table: WithRequired<({
      objectType: "Table";
      tags?: string[];
      /**
       * Format: date-time
       * @description Date and time when the figures in the table was last updated, in UTC time.
       */
      updated: string | null;
      /**
       * @description First period
       * @example 2017
       */
      firstPeriod: string | null;
      /**
       * @description Last period
       * @example 2022
       */
      lastPeriod: string | null;
      /**
       * @description Mostly for internal use. Which category table belongs to. internal, public, private or section.
       * @default public
       * @enum {string}
       */
      category?: "internal" | "public" | "private" | "section";
      /** @description List of varibles name */
      variableNames: string[];
      discontinued?: boolean | null;
      /** @description Links to ... */
      links: components["schemas"]["Link"][] | null;
    }) & Omit<components["schemas"]["FolderContentItem"], "objectType">, "updated" | "firstPeriod" | "lastPeriod" | "variableNames" | "links">;
    PageInfo: {
      /**
       * Format: int32
       * @description The current page number.
       */
      pageNumber: number;
      /**
       * Format: int32
       * @description The maximal number of elements in a page
       * @example 100
       */
      pageSize: number;
      /**
       * Format: int32
       * @description the Total number of elements
       */
      totalElements: number;
      /**
       * Format: int32
       * @description The total number of pages
       */
      totalPages: number;
      links?: components["schemas"]["Link"][];
    };
    TablesResponse: {
      /** @description The language code (ISO 639) for this response */
      language: string;
      tables: components["schemas"]["Table"][];
      page: components["schemas"]["PageInfo"];
      links?: components["schemas"]["Link"][];
    };
    /** @enum {string} */
    VariableTypeEnum: "ContentsVariable" | "TimeVariable" | "GeographicalVariable" | "RegularVariable";
    TableMetadataResponse: {
      /** @description The language code (ISO 639) for this response */
      language: string;
      /**
       * @description Identifier for the table.
       * @example TAB0001
       */
      id: string;
      /**
       * @description A title for the table that describes the content of it.
       * @example Corporations Financial Assets and Liabilities. Quarterly 1998K2 - 2021K4
       */
      label: string;
      /**
       * @description A description of the table.
       * @example Corporations Financial Assets and Liabilities by item. Quarterly 1998K2 - 2021K4 [2022-03-11]
       */
      description?: string;
      /** @description If all content of the table can be aggregated. */
      aggregationAllowed?: boolean;
      /** @description A marker if the table is a part of the national official statistics. */
      officalStatistics?: boolean;
      /**
       * @description The code for the subject area that the table belongs to.
       * @example BE
       */
      subjectCode?: string;
      /**
       * @description The label for the subject area that the table belongs to.
       * @example Population
       */
      subjectLabel?: string;
      /**
       * @description The name of the organization responsible for the table.
       * @example Statistics Sweden
       */
      source?: string;
      /**
       * @description A copyright statement for the data it could also be SPDX (https://spdx.org/licenses/) identifier
       * @example CC0-1.0
       */
      licence?: string;
      /** @description A list of strings/tags associated with the table */
      tags?: string[];
      /**
       * Format: date-time
       * @description Date and time when the figures in the table was last updated, in UTC time.
       */
      updated?: string | null;
      /** @description A list of notes associated with the table as a whole or a specific area of the table */
      notes?: components["schemas"]["CellNote"][];
      /** @description A list of contacts associated with the table. */
      contacts?: components["schemas"]["Contact"][];
      variables: components["schemas"]["AbstractVariable"][];
      links: components["schemas"]["Link"][];
    };
    AbstractVariable: {
      /** @example impex01 */
      id: string;
      /** @example Import and export */
      label: string;
      type: components["schemas"]["VariableTypeEnum"];
      notes?: components["schemas"]["Note"][];
      links?: components["schemas"]["Link"][];
    };
    Note: {
      /**
       * @description Must be shown to end user if true
       * @default false
       */
      mandatory?: boolean;
      text: string;
    };
    /** @description Note for a table or a part of it */
    CellNote: ({
      /** @description A set of condition that must be fulfilled for the note to be valid. */
      conditions?: components["schemas"]["Condition"][] | null;
    }) & components["schemas"]["Note"];
    /** @description Condition determining to what the CellNote applies */
    Condition: {
      /** @description The code of the variable */
      variable: string;
      /** @description The code of the value */
      value: string;
    };
    /** @description Time variable */
    TimeVariable: ({
      type: "TimeVariable";
      /**
       * @description Indicates the time scale for the variable.
       * @default Other
       * @enum {string}
       */
      timeUnit?: "Annual" | "HalfYear" | "Quarterly" | "Monthly" | "Weekly" | "Other";
      /** @description Earliest time period in table */
      firstPeriod?: string;
      /** @description Latest time period in table */
      lastPeriod?: string;
      values?: components["schemas"]["Value"][];
    }) & Omit<components["schemas"]["AbstractVariable"], "type">;
    /** @description Content variable */
    ContentsVariable: WithRequired<{
      type: "ContentsVariable";
      values: components["schemas"]["ContentValue"][];
    } & Omit<components["schemas"]["AbstractVariable"], "type">, "values">;
    /** @description Filter variable */
    AbstractCodeListVariable: WithRequired<{
      type: "AbstractCodeListVariable";
      elimination?: boolean;
      eliminationValueCode?: string;
      values: components["schemas"]["Value"][];
      codeLists?: components["schemas"]["CodeLists"];
    } & Omit<components["schemas"]["AbstractVariable"], "type">, "values">;
    GeographicalVariable: {
      map?: string;
    } & components["schemas"]["AbstractCodeListVariable"];
    /** @description All other type of variaiable except for time, contents or geographical */
    RegularVariable: components["schemas"]["AbstractCodeListVariable"];
    CodeListInformation: {
      /** @description The identity of the CodeList */
      id: string;
      /** @description A textual name for the CodeList */
      label: string;
      type: components["schemas"]["CodeListType"];
      /** @description Links to associated information about the code list */
      links: components["schemas"]["Link"][];
    };
    Value: {
      /** @description A code representing the value. */
      code: string;
      /** @description A Textual name for the value */
      label: string;
      /** @description Optional notes that are associated with the value */
      notes?: components["schemas"]["Note"][];
      links?: components["schemas"]["Link"][];
    };
    /** @description Content value */
    ContentValue: WithRequired<({
      baseperiod?: string | null;
      /**
       * @default None
       * @enum {string}
       */
      adjustment?: "None" | "SesOnly" | "WorkOnly" | "WorkAndSes";
      /**
       * @default Other
       * @enum {string}
       */
      measuringType?: "Stock" | "Flow" | "Average" | "Other";
      preferedNumberOfDecimals?: number;
      /** @enum {string} */
      priceType?: "Undefined" | "Current" | "Fixed";
      unit: string;
      refrencePeriod?: string;
    }) & components["schemas"]["Value"], "unit">;
    Contact: {
      /** @example Inga Svensson */
      name?: string;
      /** @example +46101111111 */
      phone?: string;
      /** @example testmail@testmail.com */
      mail?: string;
      /** @description Raw contact information for compatability with PX files */
      raw: string;
    };
    CodeListsResponse: {
      /**
       * @description The language code for the language used in this response
       * @example sv
       */
      language: string;
      codeLists?: components["schemas"]["CodeListMetadata"][];
      links?: components["schemas"]["Link"][];
    };
    CodeListMetadata: {
      /**
       * @description The identiyer for the codelist
       * @example agg_RegionNUTS2_2008
       */
      id: string;
      /**
       * @description The textual name  for the codelist.
       * @example NUTS2 fr.o.m 2008
       */
      label: string;
      type: components["schemas"]["CodeListType"];
      links: components["schemas"]["Link"][];
    };
    /**
     * @description Type of codelist
     * @enum {string}
     */
    CodeListType: "Aggregation" | "Valueset";
    CodeListResponse: {
      /**
       * @description The identiyer for the codelist
       * @example agg_RegionNUTS2_2008
       */
      id: string;
      /**
       * @description The textual name  for the codelist.
       * @example NUTS2 fr.o.m 2008
       */
      label: string;
      /**
       * @description The language code for the language used in this response
       * @example sv
       */
      language: string;
      type: components["schemas"]["CodeListType"];
      values: components["schemas"]["ValueMap"][];
      links: components["schemas"]["Link"][];
    };
    ValueMap: {
      /**
       * @description The code for the value.
       * @example SE22
       */
      code: string;
      /**
       * @description The textual representation for the value
       * @example Sydsverige
       */
      label: string;
      /**
       * @description An array of codes from the origial codelist for the variable that cand be mapped to this value
       * @example ["10", "12"]
       */
      valueMap: string[];
      /** @description Optional notes that are associated with the value */
      notes?: components["schemas"]["Note"][];
    };
    Link: {
      /** @description the link relation, see https://www.iana.org/assignments/link-relations/link-relations.xhtml */
      rel: string;
      /** @description The language that is used for the link, see https://moz.com/learn/seo/hreflang-tag */
      hreflang: string;
      /** @description the link to the resource */
      href: string;
    };
    Problem: {
      /**
       * Format: uri
       * @description An absolute URI that identifies the problem type.  When dereferenced,
       * it SHOULD provide human-readable documentation for the problem type
       * (e.g., using HTML).
       *
       * @default about:blank
       * @example https://zalando.github.io/problem/constraint-violation
       */
      type?: string;
      /**
       * @description A short, summary of the problem type. Written in english and readable
       * for engineers (usually not suited for non technical stakeholders and
       * not localized); example: Service Unavailable
       */
      title?: string;
      /**
       * Format: int32
       * @description The HTTP status code generated by the origin server for this occurrence
       * of the problem.
       *
       * @example 503
       */
      status?: number;
      /**
       * @description A human readable explanation specific to this occurrence of the
       * problem.
       *
       * @example Connection to database timed out
       */
      detail?: string;
      /**
       * Format: uri
       * @description An absolute URI that identifies the specific occurrence of the problem.
       * It may or may not yield further information if dereferenced.
       */
      instance?: string;
    };
    strarray: string[];
    /** @description See https://json-stat.org/full/#updated */
    updated: string;
    /**
     * Format: uri
     * @description Specification on json-stat.org -> [here](https://json-stat.org/full/#href)
     */
    href: string;
    /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#label) */
    label: string;
    /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#source) */
    source: string;
    /** @description extension at root level */
    "extension-root": {
      noteMandatory?: components["schemas"]["jsonstat-noteMandatory"];
      /**
       * @description Properties corresponds to keywords in the px-file.
       *
       * See [PX file format](https://www.scb.se/en/services/statistical-programs-for-px-files/px-file-format/)
       */
      px?: {
        /** @description Name of a file containing more information for the statistics** */
        infofile?: string;
        /** @description A text that is the identity of the table */
        tableid?: string;
        /** @description The number of decimals in the table cells */
        decimals?: number;
        /** @description Indicates if the data table is included in the official statistics of the organization */
        "official-statistics"?: boolean;
        /** @description If the contents of the table cannot be aggregated */
        aggregallowed?: boolean;
        /** @description Copyright is given as YES or NO */
        copyright?: string;
        /** @description code (two characters) for language */
        language?: string;
        /** @description See _description_ in [PX file format](https://www.scb.se/en/services/statistical-programs-for-px-files/px-file-format/) */
        description?: string;
        /** @description The name of the matrix */
        matrix?: string;
        /** @description Subject area code */
        "subject-code"?: string;
        /** @description Subject area */
        "subject-area"?: string;
      };
      /** @description Tag for table */
      tags?: string[];
      /** @description Table will no longer be updated */
      discontinued?: boolean | null;
      /** @description A list of contacts associated with the table. */
      contact?: components["schemas"]["Contact"][];
    };
    /** @description extension at some level */
    extension: Record<string, never>;
    /** @description extension at dimension */
    "extension-dimension": {
      /** @description Can dimension be elminated */
      elimination?: boolean;
      /** @description Elimination value code */
      eliminationValueCode?: string;
      noteMandatory?: components["schemas"]["jsonstat-noteMandatory"];
      /** @description Describes which value note are mandatory */
      categoryNoteMandatory?: {
        [key: string]: components["schemas"]["jsonstat-noteMandatory"];
      };
      /** @description Text with information on the exact period for the statistics */
      refperiod?: {
        [key: string]: string;
      };
      /** @description Information about how variables are presented */
      show?: string;
      codeLists?: components["schemas"]["CodeLists"];
      /** @description How often a table is updated */
      frequency?: string;
      /** @description Earliest time period in table */
      firstPeriod?: string;
      /** @description Latest time period in table */
      lastPeriod?: string;
    };
    "strarray-by-str-dict": {
      [key: string]: string[];
    };
    "jsonstat-link": {
      [key: string]: {
          type?: string;
          href?: components["schemas"]["href"];
        }[];
    };
    "jsonstat-extension-link": {
      describedby?: {
          /** @description A extension object */
          extension?: {
            [key: string]: string;
          };
        }[];
    };
    /** @description Spesification on json-stat.org -> [here](https://json-stat.org/full/#note) */
    "jsonstat-note": string[];
    /** @description Describes if a note of a certain index is mandatory. */
    "jsonstat-noteMandatory": {
      [key: string]: boolean;
    };
    "jsonstat-category": {
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#index) */
      index?: {
        [key: string]: number;
      };
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#label) */
      label?: {
        [key: string]: string;
      };
      /** @description Notes for values */
      note?: {
        [key: string]: components["schemas"]["jsonstat-note"];
      };
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#child) */
      child?: components["schemas"]["strarray-by-str-dict"];
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#unit) */
      unit?: {
        [key: string]: {
          /** @description It is the base unit (person, gram, euro, etc.). */
          base?: string;
          /** @description Number of decimals */
          decimals?: number;
        };
      };
    };
    /** @description Available codelists for this dimension */
    CodeLists: components["schemas"]["CodeListInformation"][];
    /**
     * JSON-stat 2.0 Dataset Schema
     * @description Representation of TableMetaData/TableData according to JSON-stat 2.0 Dataset Schema (2018-09-05 10:55), see full specification of JSON-stat format [here](https://json-stat.org/full/)
     *
     * Properties in **extension** are mostly from PX-file format, see [PX file format](https://www.scb.se/en/services/statistical-programs-for-px-files/px-file-format/)
     */
    Dataset: {
      /**
       * @description JSON-stat version 2.0
       * @default 2.0
       * @enum {string}
       */
      version: "2.0";
      /**
       * @description Is always dataset
       * @default dataset
       * @enum {string}
       */
      class: "dataset";
      href?: components["schemas"]["href"];
      label?: components["schemas"]["label"];
      source?: components["schemas"]["source"];
      updated?: components["schemas"]["updated"];
      link?: components["schemas"]["jsonstat-link"];
      /** @description Note for table */
      note?: components["schemas"]["jsonstat-note"];
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#role) */
      role?: {
        /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#time) */
        time?: components["schemas"]["strarray"];
        /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#geo) */
        geo?: components["schemas"]["strarray"];
        /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#metric) */
        metric?: components["schemas"]["strarray"];
      };
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#id) */
      id: components["schemas"]["strarray"];
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#size) */
      size: number[];
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#dimension) */
      dimension: {
        [key: string]: {
          /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#label) */
          label?: components["schemas"]["label"];
          /** @description Notes for variable */
          note?: components["schemas"]["jsonstat-note"];
          /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#category) */
          category?: components["schemas"]["jsonstat-category"];
          extension?: components["schemas"]["extension-dimension"];
          link?: components["schemas"]["jsonstat-extension-link"];
        };
      };
      extension?: components["schemas"]["extension-root"];
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#value) */
      value: ((number | null)[]) | null;
      /** @description Specification on json-stat.org -> [here](https://json-stat.org/full/#status) */
      status?: {
        [key: string]: string;
      };
    };
  };
  responses: {
    /** @description Error respsone for 429 */
    ErrorResponse429: {
      content: {
        "application/problem+json": components["schemas"]["Problem"];
      };
    };
    /** @description Error respsone for 400 */
    ErrorResponse400: {
      content: {
        "application/problem+json": components["schemas"]["Problem"];
      };
    };
    /** @description Error respsone for 403 */
    ErrorResponse403: {
      content: {
        "application/problem+json": components["schemas"]["Problem"];
      };
    };
    /** @description Error respsone for 404 */
    ErrorResponse404: {
      content: {
        "application/problem+json": components["schemas"]["Problem"];
      };
    };
  };
  parameters: {
    /** @description The language if the default is not what you want. */
    language?: string | null;
    /** @description Id */
    id: string;
    /** @description Identifier for a code list */
    codeListId: string;
    /** @description Selects only tables that that matches a criteria which is specified by the search parameter. */
    query?: string;
    /** @description Selects only tables that was updated from the time of execution going back number of days stated by the parameter pastDays. Valid values for past days are integers between 1 and ? */
    pastDays?: number;
    /** @description Decides if discontinued tables are included in response. */
    include_discontinued?: boolean;
    /** @description Pagination: Decides which page number to return */
    pageNumber?: number;
    /** @description Pagination: Decides how many tables per page */
    pageSize?: number;
    /** @description The format of the resulting metadata */
    metadataOutputFormat?: components["schemas"]["MetadataOutputFormatType"];
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export interface external {
  "examplesAsYml/dataset-meta.yml": unknown
  "examplesAsYml/folder-be.yml": unknown
  "examplesAsYml/folder-root.yml": unknown
  "examplesAsYml/tableMetadata.yml": unknown
  "examplesAsYml/tablesResponse.yml": unknown
}

export interface operations {

  /** Get root Folder. */
  GetNavigationRoot: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["FolderResponse"];
        };
      };
      400: components["responses"]["ErrorResponse400"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /** Gets Folder by {id}. */
  GetNavigationById: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
      };
      path: {
        id: components["parameters"]["id"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["FolderResponse"];
        };
      };
      400: components["responses"]["ErrorResponse400"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /** Get all Tables. */
  ListAllTables: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
        query?: components["parameters"]["query"];
        pastDays?: components["parameters"]["pastDays"];
        includeDiscontinued?: components["parameters"]["include_discontinued"];
        pageNumber?: components["parameters"]["pageNumber"];
        pageSize?: components["parameters"]["pageSize"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["TablesResponse"];
        };
      };
    };
  };
  /** Get Table by {id}. */
  GetTableById: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
      };
      path: {
        id: components["parameters"]["id"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["TableResponse"];
        };
      };
      400: components["responses"]["ErrorResponse400"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /**
   * Get Metadata about Table by {id}.
   * @description **Used for listing detailed information about a specific table**
   * * List all variables and values and all other metadata needed to be able to fetch data
   *
   * * Also links to where to:
   *   + Fetch
   *   - Where to get information about codelists
   *
   * * 2 output formats
   *   + Custom json
   *   - JSON-stat2
   */
  GetMetadataById: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
      };
      path: {
        id: components["parameters"]["id"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["TableMetadataResponse"];
          "application/jsonstat": components["schemas"]["Dataset"];
          "application/vnd.json-stat2+json": unknown;
        };
      };
      400: components["responses"]["ErrorResponse400"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /** Get Codelist by {id}. */
  GetTableCodeListById: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
      };
      path: {
        id: components["parameters"]["id"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["CodeListResponse"];
        };
      };
      400: components["responses"]["ErrorResponse400"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /** Get data from table by {id}. */
  GetTableData: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
        valuecodes?: {
          [key: string]: string[];
        };
        codelist?: {
          [key: string]: string;
        };
        outputvalues?: {
          [key: string]: components["schemas"]["CodeListOutputValuesType"];
        };
        outputFormat?: string;
      };
      path: {
        id: components["parameters"]["id"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": string;
          "plain/text": string;
          "application/xml": string;
          "application/octet-stream": string;
        };
      };
      400: components["responses"]["ErrorResponse400"];
      403: components["responses"]["ErrorResponse403"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /** Get data from table by {id}. */
  GetTableDataByPost: {
    parameters: {
      query?: {
        lang?: components["parameters"]["language"];
        outputFormat?: string;
      };
      path: {
        id: components["parameters"]["id"];
      };
    };
    /** @description A selection */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["VariablesSelection"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": string;
          "plain/text": string;
          "application/xml": string;
          "application/octet-stream": string;
        };
      };
      400: components["responses"]["ErrorResponse400"];
      403: components["responses"]["ErrorResponse403"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
  /** Get API configuration settings. */
  GetApiConfiguration: {
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["ConfigResponse"];
        };
      };
      400: components["responses"]["ErrorResponse400"];
      404: components["responses"]["ErrorResponse404"];
      429: components["responses"]["ErrorResponse429"];
    };
  };
}
