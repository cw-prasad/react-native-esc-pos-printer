package com.escposprinter;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.escposprinter.escpos.RNBluetoothEscposPrinterModule;
import com.escposprinter.tsc.RNBluetoothTscPrinterModule;

public class EscPosPrinterPackage implements ReactPackage {
  @NonNull
  @Override
  public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
    BluetoothService service = new BluetoothService(reactContext);

    List<NativeModule> modules = new ArrayList<>();
    modules.add(new EscPosPrinterModule(reactContext));
    modules.add(new RNBluetoothManagerModule(reactContext, service));
    modules.add(new RNBluetoothEscposPrinterModule(reactContext, service));
    modules.add(new RNBluetoothTscPrinterModule(reactContext, service));
    
    return modules;
  }

  @NonNull
  @Override
  public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
