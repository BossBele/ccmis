import {
  Document,
  Page,
  View,
  Text,
  Image,
  Link,
  Note,
} from "@react-pdf/renderer";

import styles from "../styles/bootstrap";

export default function Report({
  title = "",
  subject = "",
  logo = "",
  data = {},
}) {
  const { headerData, options, user, columns, rows } = data;
  return (
    <Document title={title} subject={subject}>
      <Page style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <Header headerData={headerData} logo={logo} />
        <Text style={{ ...styles.align_center, fontSize: 16 }}>
          {subject} Report
        </Text>
        {options ? <Options options={options} /> : null}
        {user ? <User user={user} /> : null}
        {tasks ? (
          <>
            <View>
              <Text style={{ fontSize: 14 }}>Summary</Text>
              <View
                style={{
                  width: "60%",
                  marginHorizontal: "auto",
                }}
              >
                <Table
                  columns={["Status", "No of Tasks"]}
                  rows={[
                    ["Assigned", 0],
                    ["In Progress", 1],
                    ["Finished", 0],
                    ["Closed", 0],
                  ]}
                />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 14 }}>Active Tasks</Text>
              <Table
                columns={["Status", "No of Tasks"]}
                rows={[
                  ["Assigned", 0],
                  ["In Progress", 1],
                  ["Finished", 0],
                  ["Closed", 0],
                ]}
                entity="Tasks"
                total
              />
            </View>
            <View>
              <Text style={{ fontSize: 14 }}>Tasks Overdue</Text>
              <Table
                columns={["Status", "No of Tasks"]}
                rows={[
                  ["Assigned", 0],
                  ["In Progress", 1],
                  ["Finished", 0],
                  ["Closed", 0],
                ]}
                entity="Tasks"
                total
              />
            </View>
          </>
        ) : null}
        <Table columns={columns} rows={rows} />
        <View
          style={{
            ...styles.row,
            marginVertical: 0,
            marginHorizontal: "auto",
            width: "100%",
            borderTopWidth: 2,
            borderTopStyle: "solid",
            position: "absolute",
            bottom: 0,
            left: 20,
          }}
          fixed
        >
          <Text
            style={{
              ...styles.row__col,
              ...styles.row__col_xs_4,
              fontSize: 14,
            }}
          >
            CCMIS
          </Text>
          <Text
            style={{
              ...styles.row__col,
              ...styles.row__col_xs_4,
              ...styles.align_center,
              fontSize: 14,
            }}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} / ${totalPages ?? pageNumber}`
            }
          />
          <Text
            style={{
              ...styles.row__col,
              ...styles.row__col_xs_4,
              ...styles.align_right,
              fontSize: 14,
            }}
          >
            ccmis.co.tz
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export function Header({ logo = "", headerData = {} }) {
  return (
    <View
      style={{
        ...styles.row,
        ...styles.p,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomStyle: "solid",
      }}
    >
      <Image
        src={{
          uri: logo,
          method: "GET",
          headers: {},
          body: "",
        }}
        style={{ ...styles.row__col, ...styles.row__col_xs_2 }}
      />
      <View
        style={{
          ...styles.row__col,
          ...styles.row__col_xs_10,
          ...styles.align_center,
        }}
      >
        <Text style={{ fontSize: 18 }}>{headerData?.companyName}</Text>
        <Text style={{ fontSize: 14 }}>Address: {headerData?.address}</Text>
        <Text style={{ fontSize: 14 }}>Phone: {headerData?.phoneNo}</Text>
        <Text style={{ fontSize: 14 }}>Email: {headerData?.email}</Text>
      </View>
    </View>
  );
}

export function Table({ columns = [], rows = [], entity = "", total = false }) {
  return (
    <>
      <View
        style={{
          ...styles.row,
          width: "100%",
          ...styles.p,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: "black",
        }}
      >
        {columns.map((column, i) => (
          <Text
            key={i}
            style={{
              fontSize: 12,
              flex: 12 / columns.length,
              fontWeight: "bold",
            }}
          >
            {column}
          </Text>
        ))}
      </View>
      {rows.map((arr, i) => (
        <View
          key={i}
          style={{
            ...styles.row,
            width: "100%",
            marginVertical: 5,
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#c0c0c0",
          }}
        >
          {arr.map((value, i) => (
            <Text
              key={i}
              style={{
                fontSize: 11,
                flex: 12 / columns.length,
              }}
            >
              {value}
            </Text>
          ))}
        </View>
      ))}
      <Text>
        Total {entity}: {rows.length}
      </Text>
    </>
  );
}

export function Options({ options = {} }) {
  return (
    <View
      style={{
        ...styles.p,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
      }}
    >
      <View
        style={{
          ...styles.row,
          width: "100%",
          marginTop: 0,
        }}
      >
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          Status: {options?.status}
        </Text>
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          Zone: {options?.zone}
        </Text>
      </View>
      <View
        style={{
          ...styles.row,
          width: "100%",
          marginTop: 0,
        }}
      >
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          Priority: {options?.priority}
        </Text>
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          Street: {options?.street}
        </Text>
      </View>
      <View
        style={{
          ...styles.row,
          width: "100%",
          marginTop: 0,
        }}
      >
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          Report Method: {options?.method}
        </Text>
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          Department: {options?.department}
        </Text>
      </View>
      <View
        style={{
          ...styles.row,
          width: "100%",
          marginTop: 0,
        }}
      >
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          From: {options?.from}
        </Text>
        <Text
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
            fontSize: 12,
          }}
        >
          To: {options?.to}
        </Text>
      </View>
    </View>
  );
}

export function User({ user = {} }) {
  return (
    <View
      style={{
        ...styles.p,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          ...styles.row,
          width: "100%",
          marginTop: 0,
        }}
      >
        <View
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
          }}
        >
          <Image
            src={{
              uri: "https://react-pdf.org/images/logo.png",
              method: "GET",
              headers: {},
              body: "",
            }}
            style={{ height: 60, width: 50 }}
          />
        </View>
        <View
          style={{
            ...styles.row__col,
            ...styles.row__col_xs_6,
          }}
        >
          <Text style={{ fontSize: 12 }}>Full Name: {user?.name}</Text>
          <Text style={{ fontSize: 12 }}>Role: {user?.role}</Text>
          <Text style={{ fontSize: 12 }}>Department: {user?.department}</Text>
          <Text style={{ fontSize: 12 }}>Zone: {user?.zone}</Text>
        </View>
      </View>
    </View>
  );
}
