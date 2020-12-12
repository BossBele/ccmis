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
  title,
  logo = "https://react-pdf.org/images/logo.png",
  complaint = { headerData: {}, options: {}, columns: [], rows: [] },
}) {
  const { headerData, options, columns, rows } = complaint;
  return (
    <Document title={title}>
      <Page style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
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
            style={styles.row__col_xs_2}
          />
          <View
            style={{
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
        <Text style={{ ...styles.align_center, fontSize: 16 }}>
          Complaints Report
        </Text>
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
