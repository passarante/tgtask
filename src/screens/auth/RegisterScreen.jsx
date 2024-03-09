import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FormHeader from "../../components/auth/FormHeader";
import { COLORS } from "../../constants";
import TitleComponent from "../../components/common/TitleComponent";
import {
  EyeSlash,
  Google,
  Lock1,
  TickSquare,
  User,
  UserTag,
} from "iconsax-react-native";
import FormInput from "../../components/auth/FormInput";
import PrimaryButton from "../../components/common/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [checked, setChecked] = useState(true);

  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <FormHeader />
      {/* Form */}
      <View>
        {/* Form Header */}
        <TitleComponent title="Create your account" size={26} />
        {/* Form Inputs */}

        <FormInput
          label="Full Name"
          placeholder="Fazil Laghari"
          leftIcon={
            <User color={COLORS.white} size={24} style={styles.leftIcon} />
          }
        />
        {/* Form Input Email */}

        <FormInput
          label="Email Adresiniz"
          placeholder="test@gmail.com"
          leftIcon={
            <UserTag color={COLORS.white} size={24} style={styles.leftIcon} />
          }
        />

        {/* Form Input Password */}
        <FormInput
          label="Şifreniz"
          placeholder="......."
          leftIcon={
            <Lock1 color={COLORS.white} size={24} style={styles.leftIcon} />
          }
          rightIcon={
            <EyeSlash color={COLORS.white} size={24} style={styles.rightIcon} />
          }
        />

        <View style={styles.termsContainer}>
          <View style={styles.termsCheck}>
            <TouchableOpacity onPress={() => setChecked((prev) => !prev)}>
              {checked ? (
                <TickSquare color={COLORS.textPrimary} size={24} />
              ) : (
                <View style={styles.emptySquare} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.termText}>
            I have read & agreed to DayTask{"  "}
            <Text style={styles.termLinkText}>
              Privacy Policy, Terms & Condition
            </Text>
          </Text>
        </View>
        <PrimaryButton text="Sign Up" style={{ marginTop: 30 }} />

        <View style={styles.continueWithBlock}>
          <View style={styles.divider} />
          <Text style={styles.continueText}>Or continue with</Text>
          <View style={styles.divider} />
        </View>
        <View>
          <TouchableOpacity style={styles.googleBtn}>
            <Google size={24} color={COLORS.white} />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginLinkText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    paddingHorizontal: 26,
    backgroundColor: COLORS.primary,
  },
  leftIcon: {
    position: "absolute",
    zIndex: 10,
    top: 17,
    left: 18,
  },

  rightIcon: {
    position: "absolute",
    zIndex: 10,
    top: 17,
    right: 18,
  },
  termsContainer: {
    flexDirection: "row",
  },
  termsCheck: {
    marginRight: 10,
  },
  emptySquare: {
    width: 24,
    height: 24,
    borderRadius: 7,
    borderColor: COLORS.text,
    borderWidth: 1,
  },
  termText: {
    color: COLORS.text,
  },
  termLinkText: {
    color: COLORS.textPrimary,
    marginLeft: 5,
  },
  continueWithBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  divider: {
    height: 1,
    width: 110,
    backgroundColor: COLORS.text,
  },
  continueText: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  googleBtn: {
    height: 50,
    borderColor: COLORS.white,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 25,
  },
  googleText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: COLORS.text,
  },
  loginLinkText: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: COLORS.btnPrimary,
  },
});
export default RegisterScreen;
